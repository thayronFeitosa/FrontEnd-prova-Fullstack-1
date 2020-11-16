<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{

    protected $fillable = [
        'street',
        'city',
        'state',
        'number',
        'neighborhood',
        'complement',
        'user_id',
    ];

    /**
     * returns the user that the address belongs to
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
