<?php

namespace App\Http\Controllers;
use App\User;
use App\Telephone;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(){
        try{
            return User::all();
        }catch(\Exception $e){
        
            return response()->json( $e, 400);
        }
      
    }

    public function  store(Request $request) {
        try{
           

            return response()->json( User::create($request->all()), 201);
        }catch(\Exception $e){
        
            return response()->json( $e, 400);
        }
    }

 
    public function show(int $id)
    {
        try{
            $results = app('db')->select("SELECT * FROM users where id =".$id);

            if(sizeof($results) ===0){
                return response()->json( '', 204);
    
            }
            return response()->json( $results, 201);

        }catch(\Exception $e){
        
            return response()->json( $e, 400);
        }
      
       

    }
 

    public function update(int $id, Request $request){

        try{
            $user = User::find($id);
            if(is_null($user)){
                return response()->json(['erro' => 'recurso não encontrado']
                    ,
                 404);
    
            }
            $user->fill($request->all());
            $user->save();
    
            return $user;
        }catch(\Exception $e){
        
            return response()->json( $e, 400);
        }
      
    }

    public function destroy(int $id){
        
        try{
            $qtdRecursosRemovidos = User::destroy($id);
            if ($qtdRecursosRemovidos === 0) {
                return response()->json([
                    'erro' => 'Recurso não encontrado'
                ], 404);
            }
        
            return response()->json('', 204);
        }catch(\Exception $e){
        
            return response()->json( $e, 400);
        }
 
}

    
}