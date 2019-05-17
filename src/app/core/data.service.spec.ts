import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DataService } from './data.service';
import { Post } from './models/post.model';

describe('DataService', () => {
  let service: DataService ;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
  TestBed.configureTestingModule({
  imports: [ HttpClientTestingModule]
  })
  
  service = TestBed.get(DataService);
  httpMock  = TestBed.get(HttpTestingController);
});

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

 it("should retrieve posts from API via GET request", () => {
   const DummyPost: Post[] = [
      { userId: 1, id: 1, body: 'Hello World', title: 'Testing Angular Service' },
      { userId: 2, id: 2, body: 'This is Service', title: 'Testing Service get request' }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(DummyPost);
    });

    const request = httpMock.expectOne(`${service.Root_Url}/posts`);
    expect(request.request.method).toBe('GET');

    request.flush(DummyPost);
  })

  it("should add new post using POST API request", () => {
    const DummyPost: Post = { 
      userId: 1, 
      id: 1, 
      body: 'Hello World', 
      title: 'Testing Angular Service' 
    }
 
     service.addPost(DummyPost).subscribe(post => {
       expect(post).toEqual(DummyPost);
     });
 
     const request = httpMock.expectOne(`${service.Root_Url}/posts`);
     expect(request.request.method).toBe('POST');
 
     request.flush(DummyPost);
   })

  it("should update an existing post", () => {
    const DummyPost: Post = { 
      userId: 1, 
      id: 1, 
      body: 'Hello World', 
      title: 'Testing Angular Service' 
    }
    
    service.updatePost(DummyPost).subscribe(post => {
      expect(post).toEqual(DummyPost)
    });

    const request = httpMock.expectOne(`${service.Root_Url}/posts/1`);
    expect(request.request.method).toBe('PUT');

    request.flush(DummyPost);
  })
 
  it("should delete an existing post", () => {
        
    service.deletePost().subscribe(() => { });

    const request = httpMock.expectOne(`${service.Root_Url}/posts/1`);
    expect(request.request.method).toBe('DELETE');

  })

});
