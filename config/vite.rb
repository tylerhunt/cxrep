if ENV['PORT']
  ViteRuby.configure(
    host: ENV.fetch('HOST', 'localhost'),
    https: ENV.fetch('PROTOCOL') == 'https',
    port: (Integer(ENV.fetch('PORT')) + 100).to_s,
  )
end
