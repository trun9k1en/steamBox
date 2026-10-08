<?php
declare(strict_types=1);

const COUNTER_FILE = __DIR__ . '/data/downloads.sqlite';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

try {
    if (!is_file(COUNTER_FILE)) {
        echo json_encode(['downloads' => 0]);
        exit;
    }

    $db = new PDO('sqlite:' . COUNTER_FILE, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    $row = $db->query("SELECT total FROM download_stats WHERE name = 'steambox'")->fetch();
    echo json_encode(['downloads' => (int) ($row['total'] ?? 0)]);
} catch (Throwable $error) {
    http_response_code(503);
    echo json_encode(['downloads' => null]);
}
