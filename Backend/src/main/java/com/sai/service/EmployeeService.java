package com.sai.service;

import java.util.List;

import com.sai.entity.Employee;

public interface EmployeeService {
	Employee craeteEmployee(Employee emp);
	Employee getEmployeeById(Long id);
	List<Employee>getAllEmployees();
	Employee updateEmployee(Long id,Employee emp);
	Employee patchEmployee(Long id,Employee emp);
	void deleteEmployee(Long id);

}
