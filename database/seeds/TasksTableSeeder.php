<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $tasks = [
            [
                'id'            => 1,
                'title'         => 'Finish the php project',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 2,
                'title'      => 'Learn more about Cors and JWT',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 3,
                'title'      => 'Celebrate the victory of Angular 4 over 1.',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 4,
                'title'      => 'Show the power of Golang to the office',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 5,
                'title'      => 'Prepare refutation for Angularjs (1.x)',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 6,
                'title'      => 'Expecting cousin from China',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id'         => 7,
                'title'      => 'Need to get ramadan grocery shopping',
                'completed'     => 0,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        DB::table('tasks')->insert($tasks);

    }
}
