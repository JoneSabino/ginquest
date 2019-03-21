call gource --output-custom-log "ginquest_gource_temp.log"
call svn log ../.. -r 1:HEAD --xml --verbose --quiet > "ginquest_svn_temp.log"
exit