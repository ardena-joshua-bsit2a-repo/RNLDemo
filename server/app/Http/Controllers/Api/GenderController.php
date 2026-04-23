<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gender;

class GenderController extends Controller
{
    public function storeGender(Request $request)
    {
        $validated = $request->validate([
            'gender' => ['required', 'string', 'min:3', 'max:15', 'unique:tbl_genders,gender']
        ]);

        Gender::create([
            'gender' => $validated['gender']
        ]);

        return response()->json([
            'message' => 'Gender Successfully Saved.'
        ], 201);
    }
}
