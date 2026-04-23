package com.sai.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sai.entity.Employee;
import com.sai.service.EmployeeService;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/employees")
public class EmployeeController {
	private EmployeeService service;
	
	EmployeeController(EmployeeService service){
		this.service=service;
	}
	@PostMapping
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee emp){
		Employee existing=service.craeteEmployee(emp);
		return new ResponseEntity<>(existing,HttpStatus.CREATED);
	}
	@GetMapping
	public ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee>all=service.getAllEmployees();
		return new ResponseEntity<>(all,HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
		Employee getEmploye=service.getEmployeeById(id);
		return new ResponseEntity<>(getEmploye,HttpStatus.OK);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Employee>updateEmployee(@PathVariable Long id,@RequestBody Employee emp){
		Employee getEmp=service.updateEmployee(id, emp);
		return new ResponseEntity<>(getEmp,HttpStatus.OK);
	}
	@PatchMapping("/{id}")
	public ResponseEntity<Employee>pathchUpdate(@PathVariable Long id,@RequestBody Employee emp){
		Employee patchUpdate=service.patchEmployee(id, emp);
		return new ResponseEntity<>(patchUpdate,HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmp(@PathVariable Long id) {
		service.deleteEmployee(id);
		return new ResponseEntity<>("Employe Delete Successfully",HttpStatus.OK);
	}

}
