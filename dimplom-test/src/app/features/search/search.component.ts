import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty/faculty.service';
import { Observable } from 'rxjs';
import { FacultyInterface } from 'src/app/interfaces/models/faculty.interface';
import { FormGroup } from '@angular/forms';
import { StudentSearchService } from 'src/app/services/search/student-search.service';
import { SearchStudentResultInterface } from 'src/app/interfaces/models/search-student-result.interface';

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
    ) {}

  ngOnInit() {
    this.faculties$ = this.faculties.getAllFaculties();
    this.searchResult$ = this.searchService.search({});
  }

}
