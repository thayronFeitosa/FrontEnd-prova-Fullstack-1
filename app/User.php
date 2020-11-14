<?php
namespace App;

use Illuminate\Database\Eloquent\Model;


class User extends Model 
{

    public $timestamps = false;
    protected $fillable = ['name', 'cpf','email','birthdate','password'];

    public function user(){

        return $this->hasMany(User::class);
    }

    public function telephones(): HasMany
    {
        return $this->hasMany(Telephone::class);
    }

}
