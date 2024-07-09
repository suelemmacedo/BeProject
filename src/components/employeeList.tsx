import React, { useEffect, useState } from 'react';
import EmployeeCard from './employees';
import { Employee } from '../types/Employee';
import { fetchEmployees } from '../services/employeeService';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees(searchQuery);
        setEmployees(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          {employees.map((employee) => (
            <EmployeeCard key={employee.name} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;