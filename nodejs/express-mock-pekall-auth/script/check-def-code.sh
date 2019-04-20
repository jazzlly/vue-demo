#!/bin/bash

# set -x

source ./config.sh

es_indices=$(curl -s ${ES_HOST}/_cat/indices|\
    grep '\(pekall-mdm-admin-log-\|pekall-mdm-dev-log-\|uni-auth-dev-login-log-\|pekall-dev-app-log-\)'|\
    grep -v bak |awk '{print $3}')
# es_indices=(
# )

for idx in $es_indices
do
    echo $idx
    curl -s ${NODE_HOST}/check_def_code_for_index?index=${idx}
    echo
done
