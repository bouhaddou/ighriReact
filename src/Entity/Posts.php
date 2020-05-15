<?php

namespace App\Entity;

use App\Entity\Avatar;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PostsRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=PostsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource(
 * attributes={"order"={"id": "DESC"}},
 *  normalizationContext={
 *      "groups"={"posts_read","media_object_read"}
 * }
 *
 * )
 */
class Posts
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"posts_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"posts_read"})
     * @Assert\NotBlank(message="Merci de Tapez Votre Nom Complet ")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"posts_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"posts_read"})
     */
    private $message;

    /**
     * @var Avatar|null
     *
     * @ORM\ManyToMany(targetEntity="App\Entity\Avatar")
     * @ORM\JoinColumn()
     * ApiSubresource()
     * @Groups({"posts_read"})
     */
    public $avatars;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

   
}
