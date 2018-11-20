#!/usr/bin/env bash
APP_ROOT="$(dirname "$(dirname "$(readlink -fm "$0")")")"
PYTHONPATH="${APP_ROOT}:${PYTHONPATH}"
exec python3 -m <%= rootPackage %>.cli "$@"
