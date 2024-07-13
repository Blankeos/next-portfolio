-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS views (
  id VARCHAR(255) PRIMARY KEY,
  views INT NOT NULL DEFAULT 1
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- SELECT 'down SQL query';
-- +goose StatementEnd
