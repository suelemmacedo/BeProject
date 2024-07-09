import React, { useState } from 'react';
import styled from 'styled-components';
import { Employee } from '../types/Employee';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

const EmployeeCardContainer = styled.div`
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000033;
  margin: 16px 0;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    td {
      vertical-align: middle;
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      padding: 8px 16px;
      border-bottom: 1px solid #dfdfdf;
    }

    &:nth-child(even) {
      background-color: #f9f9f9;
    }

    td:last-child {
      cursor: pointer;
    }
  }

  th {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding: 8px 16px;
    background-color: #eaeaea;
    border-bottom: 2px solid #dfdfdf;
  }
`;

// Informações principais do funcionário
const EmployeeInfo = styled.tr<{ open: boolean }>`
  height: 49px;

  .photo {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .end {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 17px;
      height: auto;
      transition: 0.2s;
      transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }
`;

// Informações detalhadas do funcionário
const EmployeeDropdownInfo = styled.tr<{ open: boolean }>`
  height: ${({ open }) => (open ? '100%' : '0px')};

  @media (min-width: 768px) {
    display: none;
  }

  .dropdownjob {
    @media (min-width: 376px) {
      display: none;
    }
  }

  .dropdownadmission {
    @media (min-width: 600px) {
      display: none;
    }
  }

  .dropdownphone {
    @media (min-width: 768px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    transition: 0s;
    height: ${({ open }) => (open ? '100%' : '0px')};
    overflow: auto;
    margin: ${({ open }) => (open ? '10px 12px 32px 12px' : '0')};
    row-gap: 10px;

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px dashed #dfdfdf;
      margin: 0;
      padding: 8px 0;

      h1 {
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
      }

      h2 {
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
      }
    }
  }
`;

interface EmployeeCardProps {
  employee: Employee;
}

// Função para formatar a data de admissão
const formatDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [open] = useState<boolean>(false);
  const formattedPhone = formatPhoneNumber(employee.phone);
  const formattedDate = formatDate(employee.admission_date);

  return (
    <EmployeeCardContainer>
      <table>
        <tbody>
          <EmployeeInfo open={open}>
            <td className="photo">
              <img src={employee.image} alt={employee.name} />
            </td>
            <td className="name">{employee.name}</td>
            <td className="position">{employee.job}</td>
            <td className="admission">{formattedDate}</td>
            <td className="phone">{formattedPhone}</td>
          </EmployeeInfo>
          {open && (
            <EmployeeDropdownInfo open={open}>
              <td colSpan={6}>
                <div>
                  <DropdownField title="Cargo" value={employee.job} />
                  <DropdownField title="Data de admissão" value={formattedDate} />
                  <DropdownField title="Telefone" value={formattedPhone} />
                </div>
              </td>
            </EmployeeDropdownInfo>
          )}
        </tbody>
      </table>
    </EmployeeCardContainer>
  );
};

interface DropdownFieldProps {
  title: string;
  value: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ title, value }) => (
  <div className={`dropdown${title.toLowerCase()}`}>
    <h1>{title}</h1>
    <h2>{value}</h2>
  </div>
);

export default EmployeeCard;