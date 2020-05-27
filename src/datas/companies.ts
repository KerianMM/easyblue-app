import {Company, CompanyInterface} from "../models/Company";

export const companies: CompanyInterface[] = [
    new Company("8fghn64", "Ma super entreprise", {
        address: "26 avenue du test",
        city: "Paris",
        code: "75000",
        country: "France"
    }, "2sqfd31"),
    new Company("4fgdhz6", "Ma petite entreprise", {
        address: "28 rue du test",
        city: "Marseille",
        code: "13000",
        country: "France"
    }, "2sqfd31")
];