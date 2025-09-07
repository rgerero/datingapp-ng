using System;

namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }
    public string? PublicId { get; set; }

    //navigation property
    public Member Member { get; set; }=null!;
}
