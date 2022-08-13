#!/bin/bash

PACK_DIR=publish;

publish() {
    cd $PACK_DIR
    echo 'Publishing to npm...'
    npm publish *.tgz
}
sh ./pack.sh && publish
