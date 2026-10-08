# Steam Box landing page

Landing page tĩnh bằng HTML, CSS và JavaScript.

## Chạy local

```bash
python -m http.server 8080
```

Mở `http://localhost:8080`.

## Bộ đếm lượt tải

Website dùng `download.php` để tăng bộ đếm SQLite rồi chuyển người dùng tới link tải thật. VPS cần có PHP-FPM và SQLite:

```bash
apt install -y php-fpm php-sqlite3
```

## Deploy VPS

Web root cần trỏ tới thư mục chứa `index.html`. Upload riêng file `SteamElf.rar` vào:

```text
downloads/SteamElf.rar
```

File tải về không nằm trong Git vì dung lượng lớn hơn giới hạn file đơn 100 MB của GitHub. Link tải thật hiện được cấu hình trong `download.php`.
