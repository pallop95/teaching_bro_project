#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    create role adminja with login password 'adminja!';
    create database this_is_database with owner adminja;
EOSQL
