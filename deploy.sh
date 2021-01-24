#!/bin/bash
echo "Deploy"
rm -rf {*.js,*css,*.ico,*.txt,*.html} && cp -r client/dist/client/** ./
