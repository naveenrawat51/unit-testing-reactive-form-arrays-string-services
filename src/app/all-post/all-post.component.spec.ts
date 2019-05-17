import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../core/data.service';
import { AllPostComponent } from './all-post.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Post } from '../core/models/post.model';
import { from, Observable, empty, throwError } from 'rxjs';


describe('AllPostComponent', () => {
  let component: AllPostComponent;
  let fixture: ComponentFixture<AllPostComponent>;
  let dataService: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllPostComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dataService = new DataService(null);
    fixture = TestBed.createComponent(AllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = new AllPostComponent(dataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("ngOnInit() should return a list of posts on page load", async () => {
    const DummyPost: Post[] = [
      { userId: 1, id: 1, body: 'Hello World', title: 'Testing Angular Service' },
      { userId: 2, id: 2, body: 'This is Service', title: 'Testing Service get request' }
    ];

    spyOn(dataService, 'getPosts').and.callFake(() => { return from([DummyPost]) })

    component.ngOnInit();

    expect(component.allPost.length).toBeGreaterThan(1)

  })
  
  it("getData() should make call to getPosts() service method", async () => {
    const DummyPost: Post[] = [
      { userId: 1, id: 1, body: 'Hello World', title: 'Testing Angular Service' },
      { userId: 2, id: 2, body: 'This is Service', title: 'Testing Service get request' }
    ];

    let spy = spyOn(dataService, 'getPosts').and.callFake(() => { return from([DummyPost]) })

    component.getData();

    expect(spy).toHaveBeenCalled();

  })

  it("getData() should return a list of posts", async () => {
    const DummyPost: Post[] = [
      { userId: 1, id: 1, body: 'Hello World', title: 'Testing Angular Service' },
      { userId: 2, id: 2, body: 'This is Service', title: 'Testing Service get request' }
    ];

    spyOn(dataService, 'getPosts').and.callFake(() => { return from([DummyPost]) })

    component.getData();

    expect(component.allPost.length).toBeGreaterThan(1)

  })

  it("getData() should set error message if we receive an error from server", async () => {
    let error = "error from the server";
    spyOn(dataService, 'getPosts').and.callFake(() => { return from(throwError(error)) })

    component.getData();

    expect(component.message).toBe(error)

  })

  it("addNewPost() should make call to addPost() service method", async () => {
    let spy = spyOn(dataService, 'addPost').and.callFake(() => { return from(empty()) })

    component.addNewPost();

    expect(spy).toHaveBeenCalled();

  })

  it("addNewPost() should add new post and return new added post using to addPost() service method POST request", async () => {
    const DummyPost: Post = {
      userId: 1,
      id: 1,
      body: 'Hello World',
      title: 'Testing Angular Service'
    }

    spyOn(dataService, 'addPost').and.returnValue(from([DummyPost]));

    component.addNewPost();

    expect(component.allPost.indexOf(DummyPost)).toBeGreaterThan(-1)

  })

  it("addNewPost() should set error message if we receive an error from server", async () => {
    let error = "error from the server";
    spyOn(dataService, 'addPost').and.callFake(() => { return from(throwError(error)) })

    component.addNewPost();

    expect(component.message).toBe(error)

  })

  it("updateSinglePost() should make call to updatePost() service method", async () => {
    let spy = spyOn(dataService, 'updatePost').and.callFake(() => { return from(empty()) })

    component.updateSinglePost();

    expect(spy).toHaveBeenCalled();

  })

  it("updateSinglePost() should update single existing post return new updated post using to updatePost() service method PUT request", async () => {
    const DummyPost: Post = {
      userId: 1,
      id: 1,
      body: 'Hello World',
      title: 'Testing Angular Service'
    }

    spyOn(dataService, 'addPost').and.returnValue(from([DummyPost]));

    component.addNewPost();

    expect(component.allPost.indexOf(DummyPost)).toBeGreaterThan(-1)

  })

  it("updateSinglePost() should set error message if we receive an error from server", async () => {
    let error = "error from the server";
    spyOn(dataService, 'updatePost').and.callFake(() => { return from(throwError(error)) })

    component.updateSinglePost();

    expect(component.message).toBe(error)

  })

  it("deleteSinglePost() should make call to deletePost() service method", async () => {
    let spy = spyOn(dataService, 'deletePost').and.callFake(() => { return from(empty()) })

    component.deleteSinglePost();

    expect(spy).toHaveBeenCalled();

  })

});
