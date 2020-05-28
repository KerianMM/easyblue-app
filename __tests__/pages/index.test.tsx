import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from "../../src/pages/index";

test('<Login/> SNAPSHOT', () => {
    const tree = renderer.create(<Login/>).toJSON();

    expect(tree).toMatchSnapshot();
});