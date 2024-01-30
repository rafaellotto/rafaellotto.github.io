<?php

if (! function_exists('generateTags')) {
    function generateTags(array $projects): array
    {
        $tags = [];

        foreach ($projects as $project) {
            foreach ($project['tags'] as $tag) {
                if (array_key_exists($tag, $tags)) {
                    $tags[$tag]++;
                } else {
                    $tags[$tag] = 1;
                }
            }
        }

        uasort($tags, function ($a, $b) {
            return $b - $a;
        });

        return $tags;
    }
}
