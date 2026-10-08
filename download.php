<?php
declare(strict_types=1);

const DOWNLOAD_URL = 'https://file.thundercloud.group/steamelfvi/client/onlineinst_vi.exe';
const COUNTER_FILE = __DIR__ . '/data/downloads.sqlite';

try {
    $dataDir = dirname(COUNTER_FILE);
    if (!is_dir($dataDir)) {
        mkdir($dataDir, 0750, true);
    }

    $db = new PDO('sqlite:' . COUNTER_FILE, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    $db->exec('CREATE TABLE IF NOT EXISTS download_stats (name TEXT PRIMARY KEY, total INTEGER NOT NULL DEFAULT 0)');
    $db->exec("INSERT INTO download_stats (name, total) VALUES ('steambox', 0) ON CONFLICT(name) DO NOTHING");
    $db->exec("UPDATE download_stats SET total = total + 1 WHERE name = 'steambox'");

    header('Cache-Control: no-store, no-cache, must-revalidate');
    header('Location: ' . DOWNLOAD_URL, true, 302);
    exit;
} catch (Throwable $error) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Download service is temporarily unavailable.';
}
