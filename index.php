<?php
    global $courses, $projects;
    require __DIR__.'/src/courses.php';
    require __DIR__.'/src/helpers.php';
    require __DIR__.'/src/projects.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta itemprop="name" content="Rafael Lotto Machado" />
	<meta property="og:title" content="Rafael Lotto Machado" />
	<meta name="twitter:title" content="Rafael Lotto Machado" />
	<meta name="description" content="Trying to be better than yesterday and worse than tomorrow" />
	<meta itemprop="description" content="Trying to be better than yesterday and worse than tomorrow" />
	<meta property="og:description" content="Trying to be better than yesterday and worse than tomorrow" />
	<meta name="twitter:description" content="Trying to be better than yesterday and worse than tomorrow" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:url" content="https://rafaellotto.com.br" />
	<meta itemprop="image" content="https://rafaellotto.com.br/images/og-picture.jpg" />
	<meta property="og:image" content="https://rafaellotto.com.br/images/og-picture.jpg" />
	<meta name="twitter:image" content="https://rafaellotto.com.br/images/og-picture.jpg" />

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa" />

	<title>Rafael Lotto Machado</title>

    <link rel="stylesheet" href="/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/css/main.css" />
</head>

<body class="container">
	<div class="row align-items-center" style="min-height: 85vh;">
		<header class="text-center">
			<img
				id="myPhoto"
				width="200"
				height="200"
				src="./images/me.jpg"
				alt="A picture of myself"
			/>

			<h1 class="mt-4">Rafael Lotto Machado</h1>

			<div class="d-flex flex-column flex-md-row justify-content-center align-items-md-center" style="min-height: 70px;">
				<div class="relative">
					<a href="https://tryhackme.com/p/ralomach" target="_blank" style="position: absolute; width: 255px; height: 66px; z-index: 50;"></a>
					<script src="https://tryhackme.com/badge/48927"></script>
				</div>

				<div class="social d-flex justify-content-center">
					<a href="mailto:email@rafaellotto.com.br" target="_blank" rel="noopener" title="E-mail">
						<div class="icons email"></div>
					</a>

					<a href="https://www.linkedin.com/in/rafaellotto" target="_blank" rel="noopener" title="LinkedIn">
						<div class="icons linkedin"></div>
					</a>

					<a href="https://github.com/rafaellotto" target="_blank" rel="noopener" title="Github">
						<div class="icons github"></div>
					</a>

					<a href="https://twitter.com/ralomach" target="_blank" rel="noopener" title="Twitter">
						<div class="icons twitter"></div>
					</a>
				</div>
			</div>
		</header>
	</div>

	<main>
		<div class="row mb-5">
			<div class="col">
				<h2>Projects (<?= count($projects) ?>)</h2>
				
				<div>
                    <?php foreach (generateTags($projects) as $tag => $count) : ?>
					<span class="badge bg-secondary"><?= $count.' '.$tag ?></span>
                    <?php endforeach; ?>
				</div>
				
				<hr class="mb-0" />

				<ul class="list-group list-group-flush">
				    <?php foreach ($projects as $project) : ?>
					<li class="list-group-item">
						<h3 class="my-2">
                            <?php if ($project['url']) : ?>
							<a href="<?= $project['url'] ?>" target="_blank">
								<?= $project['title'] ?>
							</a>
                            <?php else : ?>
                            <?= $project['title'] ?>
                            <?php endif; ?>
						</h3>

						<div>
							<p class="mb-1">
                                Live: <?= $project['launched_at'] ?>
							</p>

							<div>
                                <?php foreach ($project['tags'] as $tag) : ?>
								<span class="badge bg-secondary"><?= $tag ?></span>
                                <?php endforeach; ?>
							</div>
						</div>
					</li>
					<?php endforeach; ?>
                </ul>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col">
				<h2>Education and Courses</h2>
				<hr class="mb-0" />
				
				<ul class="list-group list-group-flush">
                    <?php foreach ($courses as $course) : ?>
					<li class="list-group-item">
						<h3 class="my-2">
                            <?php if ($course['certificate']) : ?>
							<a href="<?= $course['certificate'] ?>" target="_blank">
                                <?= $course['title'] ?>
                            </a>
                            <?php else: ?>
                            <?= $course['title'] ?>
                            <?php endif; ?>
						</h3>

						<small><?= $course['issuer'] ?> ( <?= $course['date'] ?> )</small>
					</li>
                    <?php endforeach; ?>
				</ul>
			</div>
		</div>
	</main>
</body>
</html>