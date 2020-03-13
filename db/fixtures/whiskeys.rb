# seeds for Whiskeys
[
  {
    id: 'a40e5da2-2726-4fdc-a0ec-2d8c906dca3c',
    title: 'Wouterten Broeke',
    description: 'Single Malt Fresh Sherry Hogshead 49.4% Vol',
    price: 299.00,
    photo_file_name: '243055-normal.png'
  },
  {
    id: '3b399839-50b4-4a3e-8537-f75d0831b105',
    title: 'Glengyle',
    description: 'Single Malt Re-charred Oloroso Sherry Casks 57.1% Vol',
    price: 99.00,
    photo_file_name: '238438-normal.png'
  },
  {
    id: '28a5681e-f2d6-41da-b7c1-a1885c128x335',
    title: 'Ardbeg Supernova',
    description: 'Single Malt Ex-Bourbon Casks 53.8% Vol',
    price: 180.00,
    photo_file_name: '234679-normal.png'
  },
  {
    id: 'f0ac1935-06de-4107-b2f4-731606747466',
    title: 'Macallan Secret Speyside 1996',
    description: 'Single Malt Bourbon Barrel 50.4% Vol',
    price: 550.00,
    photo_file_name: '230233-normal.png'
  },
  {
    id: 'a6508ae5-b5f7-4bc4-9a5b-12c9842cfb64',
    title: 'Springbank 12 Year Old',
    description: 'Single Malt 70% Sherry / 30% Bourbon Casks 56.3% Vol',
    price: 105.00,
    photo_file_name: '194165-normal.png'
  }
].each do |attributes|
  path = Rails.root.join('db', 'fixtures', 'photos', attributes[:photo_file_name])
  Whiskey.seed(:id) do |seed|
    seed.id = attributes[:id]
    seed.title = attributes[:title]
    seed.description = attributes[:description]
    seed.price = attributes[:price]
  end.first.photo.attach(io: File.open(path), filename: attributes[:photo_file_name], content_type: 'image/png')
end
