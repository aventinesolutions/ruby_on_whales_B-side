attach_photo = lambda do |whiskey, photo_file|
  path = Rails.root.join('db', 'fixtures', 'photos', photo_file)
  whiskey.photo.attach(io: File.open(path), filename: photo_file, content_type: 'image/png')
  whiskey.save!
end

whiskey_photo_files = %w[243055-normal.png 238438-normal.png 234679-normal.png 230233-normal.png 194165-normal.png]

[
  {
    id: 'a40e5da2-2726-4fdc-a0ec-2d8c906dca3c',
    description: 'Wouterten Broeke Single Malt Fresh Sherry Hogshead 49.4% Vol',
    price: 299.00
  },
  {
    id: '3b399839-50b4-4a3e-8537-f75d0831b105',
    description: 'Glengyle Single Malt Re-charred Oloroso Sherry Casks 57.1% Vol',
    price: 99.00
  },
  {
    id: '28a5681e-f2d6-41da-b7c1-a1885c128x335',
    description: 'Ardbeg Supernove Single Malt Ex-Bourbon Casks 53.8% Vol',
    price: 180.00
  },
  {
    id: 'f0ac1935-06de-4107-b2f4-731606747466',
    description: 'Macallan Secret Speyside 1996 Single Malt Bourbon Barrel 50.4% Vol',
    price: 550.00
  },
  {
    id: 'a6508ae5-b5f7-4bc4-9a5b-12c9842cfb64',
    description: 'Springbank 12 Year Old Single Malt 70% Sherry / 30% Bourbon Casks 56.3% Vol',
    price: 105.00
  }
].each { |attributes| Whiskey.seed(:id, attributes) }

Whiskey.pluck(:id).each_with_index do |id, index|
  attach_photo.call(Whiskey.find(id), whiskey_photo_files[index])
end
