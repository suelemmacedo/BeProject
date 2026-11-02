import type { Employee } from '../types/Employee';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

interface EmployeeRowProps {
  employee: Employee;
}

function EmployeeRow({ employee }: EmployeeRowProps) {
  const [year, month, day] = employee.admission_date.split('-');
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <tr>
      <td data-label="Foto">
        <img
          src={ employee.image }
          alt={ `Foto de ${employee.name}` }
          width={ 40 }
          height={ 40 }
          style={ { borderRadius: '50%', objectFit: 'cover' } }
        />
      </td>
      <td data-label="Nome">{ employee.name }</td>
      <td data-label="Cargo">{ employee.job }</td>
      <td data-label="Admissão">{ formattedDate }</td>
      <td data-label="Telefone">
        { formatPhoneNumber(employee.phone) }
      </td>
    </tr>
  );
}

export default EmployeeRow;
