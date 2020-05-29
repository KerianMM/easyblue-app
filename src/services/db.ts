import {Base} from "@/models/Base";
import {UserInterface} from "@/models/User";
import {CompanyInterface} from "@/models/Company";
import {PaymentInterface} from "@/models/Payment";
import {ReceiptInterface} from "@/models/Receipt";
import {ActivityInterface} from "@/models/Activity";

import {users} from "@/easyblue-app/src/datas/users";
import {companies} from "@/easyblue-app/src/datas/companies";
import {payments} from "@/easyblue-app/src/datas/payments";
import {receipts} from "@/easyblue-app/src/datas/receipts";
import {activities} from "@/easyblue-app/src/datas/activities";

interface CriteriaInterface<T> {
    key: keyof T;
    value: any;
}

interface RepositoryInterface<T extends Base> {
    findAll(): T[];

    find(id: string): T | undefined;

    findBy(criterias: CriteriaInterface<T>[]): T[];

    findOneBy(criterias: CriteriaInterface<T>[]): T | undefined;
}

interface DbInterface {
    user: Repository<UserInterface>;
    company: Repository<CompanyInterface>;
    payment: Repository<PaymentInterface>;
    receipt: Repository<ReceiptInterface>;
    activity: Repository<ActivityInterface>;
}

export class Repository<T extends Base> implements RepositoryInterface<T> {
    protected datas: T[];

    constructor(datas: T[]) {
        this.datas = datas;
    }

    find(id: string) {
        return this.datas.find((item) => item?.id === id);
    }

    findAll() {
        return this.datas;
    }

    protected compare(item: T, criterias: CriteriaInterface<T>[]): boolean {
        const criteriasValidCounter: number = criterias.reduce((counter, criteria) => {
            const isValid: boolean = item[criteria.key] === criteria.value;

            return isValid ? counter + 1 : counter;
        }, 0);

        return criterias.length === criteriasValidCounter;
    }

    findBy(criterias: CriteriaInterface<T>[]) {
        if (criterias.length) {
            return this.datas.filter((item) => this.compare(item, criterias));
        } else {
            return this.findAll();
        }
    }

    findOneBy(criterias: CriteriaInterface<T>[]) {
        if (criterias.length) {
            return this.datas.find((item) => this.compare(item, criterias));
        } else {
            return undefined;
        }
    }
}

export const userRepository: Repository<UserInterface> = new Repository<UserInterface>(users);
export const companyRepository: Repository<CompanyInterface> = new Repository<CompanyInterface>(companies);
export const paymentRepository: Repository<PaymentInterface> = new Repository<PaymentInterface>(payments);
export const receiptRepository: Repository<ReceiptInterface> = new Repository<ReceiptInterface>(receipts);
export const activityRepository: Repository<ActivityInterface> = new Repository<ActivityInterface>(activities);

const db: DbInterface = {
    user: userRepository,
    company: companyRepository,
    payment: paymentRepository,
    receipt: receiptRepository,
    activity: activityRepository,
};

export default db;
