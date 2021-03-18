project(
  'libhello',
  'c',
  version: '1.0.0',
  meson_version: '>= 0.50.0'
)

gnome = import('gnome')

inc = include_directories('.')

headers = [
  'hello.h'
]

sources = [
  'hello.c'
]

dependencies = [
  dependency('glib-2.0', required: true),
  dependency('gobject-2.0', required: true),
]

install_headers(headers)

libhello = shared_library(
  'hello',
  include_directories : inc,
  sources: sources,
  dependencies: dependencies,
  install: true
)

gnome.generate_gir(
  libhello,
  sources: headers + sources,
  namespace: 'Hello',
  nsversion: meson.project_version(),
  export_packages: meson.project_name(),
  includes: ['GObject-2.0'],
  install: true
)

libhello_dep = declare_dependency(
  include_directories: inc,
  link_with: libhello
)
