<?php

namespace App\Http\Controllers;

use Closure;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PublicController extends Controller
{
    public function __construct(){
        $this->middleware("auth:api", ["except" => ["index"] ] );
    }

    public function index() {
        
        $posts = Post::all();
        
        return response()->json([
            'status' => 200,
            'posts' => $posts
        ]);
    }

    public function storePost(Request $request) {

        $user = Auth::guard('api')->user();
        $first_n = $user->first_name;
        $last_n = $user->last_name;
        $name = $first_n .' '.$last_n;
        $post = new Post();
        $post->name = $name;
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
    
    public function getAllComments() {
        $comments = Comment::all();

        return response()->json([
            'status' => 200,
            'comments' => $comments 
        ]);
    }

    public function storeComment(Request $request, $id){
        
        $user = Auth::guard('api')->user();

        $first_last_name = $user->first_name.' '.$user->last_name;
        
        $comment = Comment::create([
            "comment" => $request->comment,
            "name" => $first_last_name,
            'post_id' => $id,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Coment added successfully' 
        ]);
    }

    public function completeProfile(Request $request) {

        $userId = Auth::guard('api')->id();
        $userProfile = User::find($userId);
        $userProfile->phone_number = $request->input('phone_number');
        $userProfile->address = $request->input('address');
        $userProfile->city = $request->input('city');
        $userProfile->zip_code = $request->input('zip_code');
        $userProfile->description = $request->input('description');
        
        if ($request->hasFile('img')) {

            $file = $request->file('img');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .".".$extension;
            $file->move('assets/img/', $filename);
            $userProfile->img = 'assets/img/'.$filename;
        }

        $userProfile->save();
       
        return response()->json([
            'status' => 200,
            'message' => 'Your profile was completed successfully',
            'user' => $userProfile, 
            'userIduu' => $userId,
        ]);
    }
}
