package com.project_1.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_1.demo.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}