const filmSchema = `
CREATE TABLE IF NOT EXISTS film (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    sinopsis TEXT
);`

module.exports = filmSchema