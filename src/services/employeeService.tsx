import { Employee } from '../types/Employee';

export const fetchEmployees = async (query: string = ''): Promise<Employee[]> => {
  const url = query ? `http://localhost:3001/employees?q=${query}` : 'http://localhost:3001/employees';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  const data = await response.json();
  return data;
};
