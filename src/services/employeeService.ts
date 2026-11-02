import type { Employee } from '../types/Employee';

const API_URL = 'http://localhost:3001';

export async function fetchEmployees(
  signal?: AbortSignal,
): Promise<Employee[]> {
  const response = await fetch(`${API_URL}/employees`, { signal });

  if (!response.ok) {
    throw new Error('Não foi possível carregar os funcionários.');
  }

  const data: Employee[] = await response.json();

  return data;
}
