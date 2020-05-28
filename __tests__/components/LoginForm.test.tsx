import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from "../../src/components/LoginForm";

test('<LoginForm/> SNAPSHOT', () => {
    const tree = renderer.create(<LoginForm/>).toJSON();

    expect(tree).toMatchSnapshot();
});
