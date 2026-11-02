import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Employee } from '../types/Employee';
import { fetchEmployees } from '../services/employeeService';
import EmployeeRow from './EmployeeRow';

interface EmployeeListProps {
  searchQuery: string;
}

const TableContainer = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 24px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px #00000020;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Roboto', sans-serif;
  }

  th {
    padding: 16px;
    text-align: left;
    background: linear-gradient(180deg, #5a84c0, #7500c8);
    color: #fff;
    font-weight: 500;
  }

  td {
    padding: 16px;
    border-bottom: 1px solid #dfdfdf;
    vertical-align: middle;
    font-size: 16px;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: #f8f8ff;
  }

  @media (max-width: 767px) {
    background: transparent;
    box-shadow: none;
    overflow: visible;

    table,
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    thead {
      display: none;
    }

    tbody tr {
      margin-bottom: 16px;
      padding: 16px;
      background: #fff;
      border: 1px solid #e8e4f0;
      border-radius: 12px;
      box-shadow: 0 2px 8px #00000010;
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      font-size: 14px;
      overflow-wrap: anywhere;
    }

    td::before {
      content: attr(data-label);
      font-weight: 600;
      color: #6656c8;
      flex-shrink: 0;
    }

    td:first-child {
      justify-content: center;
      border-bottom: none;
    }

    td:first-child::before {
      display: none;
    }

    td:first-child img {
      width: 64px;
      height: 64px;
    }

    td:last-child {
      border-bottom: none;
    }
  }
`;

const Message = styled.p`
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #666;
`;

function EmployeeList({ searchQuery }: EmployeeListProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadEmployees() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchEmployees(controller.signal);

        if (!controller.signal.aborted) {
          setEmployees(data);
        }
      } catch (fetchError: unknown) {
        if (!controller.signal.aborted) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : 'Erro ao carregar funcionários.',
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadEmployees();

    return () => controller.abort();
  }, []);

  const normalizedQuery = searchQuery.toLowerCase().trim();

  const filteredEmployees = employees.filter(
    (employee) => employee.name.toLowerCase().includes(normalizedQuery),
  );

  if (loading) {
    return <Message>Carregando funcionários...</Message>;
  }

  if (error) {
    return <Message role="alert">{ error }</Message>;
  }

  if (filteredEmployees.length === 0) {
    return <Message>Nenhum funcionário encontrado.</Message>;
  }

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nome</th>
            <th scope="col">Cargo</th>
            <th scope="col">Data de Admissão</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>

        <tbody>
          { filteredEmployees.map((employee) => (
            <EmployeeRow
              key={ employee.id }
              employee={ employee }
            />
          )) }
        </tbody>
      </table>
    </TableContainer>
  );
}

export default EmployeeList;
