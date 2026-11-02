import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/header';
import SearchInput from '../components/searchInput';
import EmployeeList from '../components/employeeList';

function EmployeePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const handleSearch = useCallback((value: string) => {
    setSearchParams(value ? { search: value } : {});
  }, [setSearchParams]);

  return (
    <>
      <Header />
      <main>
        <SearchInput
          title="Funcionários"
          value={ search }
          onSearch={ handleSearch }
        />
        <EmployeeList searchQuery={ search } />
      </main>
    </>
  );
}

export default EmployeePage;
