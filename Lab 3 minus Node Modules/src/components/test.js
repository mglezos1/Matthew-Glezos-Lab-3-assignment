import React from 'react';
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';
import Todolist from './TodoList';
import mockData from '../../mockData';

describe('todo list test', () =>{
    it('should show titile of todos', () =>{
        render(<Todolist todos={mockData}/>);
        mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    });
});