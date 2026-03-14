#!/bin/bash
set -e

for file in database/schema/[0-9][0-9]_*.sql; do
    echo "Applying schema: $file..."
    turso db shell catdat < "$file"
done

for file in database/data/*.sql; do
    echo "Inserting source data from: $file..."
    turso db shell catdat < "$file"
done