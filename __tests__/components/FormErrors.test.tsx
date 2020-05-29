import '@testing-library/jest-dom';
import React from 'react';
import renderer, {ReactTestRenderer, ReactTestRendererJSON} from 'react-test-renderer';

import {FormError, FormErrorContainer} from "@/interfaces/form/error";
import FormErrors from "@/components/FormErrors";

test('<FormErrors/> SNAPSHOT - EMPTY', () => {
    const formErrors: FormErrorContainer = {errors: []};

    const tree = renderer.create(<FormErrors formErrors={formErrors}/>).toJSON();

    expect(tree).toMatchSnapshot();
});

test('<FormErrors/> SNAPSHOT - 1 ERROR', () => {
    const formError: FormError = {message: 'Error message'};
    const formErrorsContainer: FormErrorContainer = {errors: [formError]};

    const component: ReactTestRenderer = renderer.create(<FormErrors formErrors={formErrorsContainer}/>);

    const tree: ReactTestRendererJSON = component.toJSON();

    expect(tree).toMatchSnapshot();
});