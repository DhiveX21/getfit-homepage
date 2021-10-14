import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Button from './index'

test("ini harus nya is disabled",() => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

test("render loading/spinner",() => {
    const {container,getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i))

    expect(container.querySelector('span')).toBeInTheDocument()
});

test("render <a> tag",() => {
    const {container,getByText} = render(<Button  type="link" isExternal></Button>)

   
    expect(container.querySelector('a')).toBeInTheDocument()
});

test("render <Link> component",() => {
    const {container,getByText} = render(<Router><Button href="" type="link" ></Button></Router>)

  
    expect(container.querySelector('a')).toBeInTheDocument()
});