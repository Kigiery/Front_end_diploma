import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty/faculty.service';
import { Observable } from 'rxjs';
import { FacultyInterface } from 'src/app/interfaces/models/faculty.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentSearchService } from 'src/app/services/search/student-search.service';
import { SearchStudentResultInterface } from 'src/app/interfaces/models/search-student-result.interface';
import { SearchStudentInterface } from 'src/app/interfaces/models/search-student.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public faculties$: Observable<FacultyInterface[]>;
  public searchResult$: Observable<SearchStudentResultInterface>;
  public searchForm: FormGroup;

  constructor(
      private faculties: FacultyService,
      private searchService: StudentSearchService,
      private fb: FormBuilder,
    ) {
      this.searchForm = this.fb.group({
        name: [''],
        surname: [''],
        dataOfBirth: [''],
        faculty: [{}],
      });
    }

  ngOnInit() {
    this.faculties$ = this.faculties.getAllFaculties();
    this.searchResult$ = this.searchService.search({});
  }

  public onSubmit(): void {
    const searchParams = this.searchForm.value as SearchStudentInterface;
    console.log(searchParams);
    this.searchResult$ = this.searchService.search(searchParams);
  }

}
