<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PublicController extends Controller
{
    // public function __construct(){
    //     $this->middleware("api")->except('index');
    // }

    public function index() {
    
        $posts = Post::all();
        
        return response()->json([
            'status' => 200,
            'posts' => $posts
        ]);
    }

    public function storePost(Request $request) {
        // $user = Auth::guard('api')->id();
        // var_dump($user);

        $post = new Post();
        $post->name = $request->name;
        $post->email = $request->email;
        $post->content = $request->content;
        
        if ($request->hasFile('img')) {

            $file = $request->file('img');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .".".$extension;
            $file->move('assets/img/', $filename);
            $post->img = 'assets/img/'.$filename;
        }
        
        $post->save();

        return response()->json([
            'status' => 200,
            'message' => 'Post added successfully' 
        ]);
    }

    public function editPost($id){
        $post = Post::find($id);

        return response()->json([
            'status' => 200,
            'posts' => $post
        ]);    
    }

    public function updatePost(Request $request, $id) {

        $post = Post::find($id);
         
        $post->name = $request->name;
        $post->email = $request->email;
         
    }
 
    public function destroy($id) {
        $post = Post::find($id);
        $post->delete();
    }
}
