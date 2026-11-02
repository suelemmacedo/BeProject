import type { Employee } from '../types/Employee';

interface EmployeesResponse {
  employees: Employee[];
}

export async function fetchEmployees(
  signal?: AbortSignal,
): Promise<Employee[]> {
  const response = await fetch('/db.json', { signal });

  if (!response.ok) {
    throw new Error('Erro ao carregar funcionários.');
  }

  const data: EmployeesResponse = await response.json();

  return data.employees;
}
