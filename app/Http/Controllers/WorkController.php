<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Inertia\Inertia;
use Inertia\Response;

class WorkController extends Controller
{
    /**
     * Display a listing of works.
     */
    public function index(): Response
    {
        $works = Work::orderBy('order')->get();

        return Inertia::render('Welcome', [
            'works' => $works,
        ]);
    }

    /**
     * Display the specified work.
     */
    public function show(int $id): Response
    {
        $work = Work::findOrFail($id);

        return Inertia::render('WorkDetail', [
            'work' => $work,
        ]);
    }
}
