import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  id!: string;
  post!: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchPost();
  }

  fetchPost() {
    this.postService.getPostsById(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.post = res;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
