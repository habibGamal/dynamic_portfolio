<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('works', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->longText('full_description');
            $table->longText('problem');
            $table->longText('solution');
            $table->string('role');
            $table->json('contributions');
            $table->json('tech_stack');
            $table->json('challenges');
            $table->json('images');
            $table->json('metrics')->nullable();
            $table->json('tags');
            $table->string('main_image');
            $table->string('source_code_link');
            $table->string('duration');
            $table->string('team_size')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works');
    }
};
