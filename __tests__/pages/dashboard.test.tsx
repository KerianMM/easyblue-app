import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from "../../src/pages/dashboard";

test('<Dashboard/> SNAPSHOT', () => {
    const tree = renderer.create(<Dashboard/>).toJSON();

    expect(tree).toMatchSnapshot();
});
