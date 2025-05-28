# Get file path without extension
def no_ext(path)
  path.sub(/\.[^\/]*$/, '')
end

