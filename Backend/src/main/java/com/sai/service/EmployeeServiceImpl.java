package com.sai.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sai.entity.Employee;
import com.sai.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	private final EmployeeRepository repository;
	
	EmployeeServiceImpl(EmployeeRepository repository){
		this.repository=repository;
	}

	@Override
	public Employee craeteEmployee(Employee emp) {
		
		return repository.save(emp);
	}

	@Override
	public Employee getEmployeeById(Long id) {
		return repository.findById(id).orElseThrow(()->new RuntimeException("Employee Not Found: "+id));
	}

	@Override
	public List<Employee> getAllEmployees() {
		return repository.findAll();
	}

	@Override
	public Employee updateEmployee(Long id, Employee emp) {
		Employee existing=repository.findById(id).orElseThrow(()->new RuntimeException("Employee is not found: "+id));
		existing.setName(emp.getName());
		existing.setEmail(emp.getEmail());
		existing.setDepartment(emp.getDepartment());
		existing.setSalary(emp.getSalary());
		return repository.save(existing);
	}

	@Override
	public Employee patchEmployee(Long id, Employee emp) {
		Employee existing=getEmployeeById(id);
		if(emp.getName()!=null) {
			existing.setName(emp.getName());
		}
		if(emp.getEmail()!=null) {
			existing.setEmail(emp.getEmail());
		}
		if(emp.getSalary()!=0) {
			existing.setSalary(emp.getSalary());
		}
		if(emp.getDepartment()!=null) {
			existing.setDepartment(emp.getDepartment());
		}
		return repository.save(existing);
	}

	@Override
	public void deleteEmployee(Long id) {
		if(!repository.existsById(id)) {
			throw new RuntimeException("Employee Not Found");
		}
		repository.deleteById(id);
		
	}


}
